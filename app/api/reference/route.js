import dbConnect from '@/lib/mongodb';
import Reference from '@/models/reference';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET endpoint
export async function GET(request) {
    await dbConnect();

    try {
        const references = await Reference.find({});
        return NextResponse.json({ success: true, data: references });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

// POST endpoint
export async function POST(request) {
  	await dbConnect();

  	try {
    	const formData = await request.formData();
    	const title = formData.get('title');
    	const descr_en = formData.get('descr_en');
    	const file = formData.get('file');

    	if (file && file.size === 0) {
        	return NextResponse.json({ success: false, message: 'Empty file uploaded' }, { status: 400 });
    	}

    	// Save the file to the /uploads directory
    	const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    	if (!fs.existsSync(uploadsDir)) {
      		fs.mkdirSync(uploadsDir, { recursive: true });
    	}

    	const filePath = path.join(uploadsDir, file.name);
    	const arrayBuffer = await file.arrayBuffer();
    	fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

    	// Add to database
    	const imgUrl = `/uploads/${file.name}`;
    	const reference = await Reference.create({ title, descr_en, img_url: imgUrl });

    	return NextResponse.json({ success: true, data: reference }, { status: 201 });
  	} catch (error) {
    	return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  	}
}