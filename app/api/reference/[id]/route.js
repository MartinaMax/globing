import dbConnect from "@/lib/mongodb";
import Reference from "@/models/reference";
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';


// PUT endpoint
export async function PUT(request, { params }) {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ success: false, message: 'ID is required' }, { status: 400 });
    }

  	await dbConnect();

  	try {
    	// Parse form data
    	const formData = await request.formData();
    	const title = formData.get('title');
    	const descr_sk = formData.get('descr_sk');
    	const file = formData.get('file');

    	if (!title || !descr_sk) {
      		return NextResponse.json({ success: false, message: 'Title and description are required' }, { status: 400 });
    	}

    	// Find the existing reference to get the current img_url
    	const referenceToUpdate = await Reference.findById(id);
    	if (!referenceToUpdate) {
      		return NextResponse.json({ success: false, message: 'Reference not found' }, { status: 404 });
    	}

    	// If a new file is provided, delete the old file
    	let newImgUrl = referenceToUpdate.img_url;
    	if (file) {
      		// Remove the old file
      		const oldFilePath = path.join(process.cwd(), 'uploads', referenceToUpdate.img_url.replace('/uploads/', ''));
      		if (fs.existsSync(oldFilePath)) {
        		await fs.promises.unlink(oldFilePath);
        		console.log(`Old file deleted: ${oldFilePath}`);
      		}

      		// Save the new file
      		const uploadsDir = path.join(process.cwd(), 'uploads');
      		if (!fs.existsSync(uploadsDir)) {
        		fs.mkdirSync(uploadsDir, { recursive: true });
      		}

      		const filePath = path.join(uploadsDir, file.name);
      		const arrayBuffer = await file.arrayBuffer();
      		fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

      		// Update img_url
      		newImgUrl = `/uploads/${file.name}`;
    	}

    	// Update the reference in the database
    	const updatedReference = await Reference.findByIdAndUpdate(
      		id,
      		{ title, descr_en, img_url: newImgUrl },
      		{ new: true }
    		);

    		if (!updatedReference) {
      			return NextResponse.json({ success: false, message: 'Reference update failed' }, { status: 500 });
    		}

    		return NextResponse.json({ success: true, data: updatedReference }, { status: 200 });

  	} catch (error) {
    	console.error('Error:', error);
    	return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  	}
}


// DELETE endpoint
export async function DELETE(request, {params}) {

    const {id} = params;

    await dbConnect();
  
    if (!id) {
      	return NextResponse.json({ success: false, message: 'ID is required' }, { status: 400 });
    }

    try {
      	// Find the reference to get the img_url (which contains the filename)
      	const referenceToDelete = await Reference.findById(id);
      	if (!referenceToDelete) {
        	return NextResponse.json({ success: false, message: 'Reference not found' }, { status: 404 });
      	}
  
      	// Extract the filename from img_url
      	const filePath = path.join(process.cwd(), 'uploads', referenceToDelete.img_url.replace('/uploads/', ''));
  
      	// Delete the file from the /uploads directory
      	try {
        	if (fs.existsSync(filePath)) {
          		await fs.promises.unlink(filePath);  // Delete the file
          		console.log(`File deleted: ${filePath}`);
        	}
      	} catch (fileDeleteError) {
        	console.error('Error deleting file:', fileDeleteError);
        	return NextResponse.json({ success: false, message: 'Error deleting file' }, { status: 500 });
      	}
  
      	// Delete the reference from the database
      	const deletedReference = await Reference.findByIdAndDelete(id);
      	if (!deletedReference) {
        	return NextResponse.json({ success: false, message: 'Reference not found' }, { status: 404 });
      	}
  
      	return NextResponse.json({ success: true, message: 'Reference and file deleted successfully' });
    } catch (error) {
      	console.error('Error:', error);
      	return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}