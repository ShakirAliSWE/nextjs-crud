import connectMongoDB from "@/app/libs/mongoDB";
import Products from "@/app/models/products";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const products = await Products.find();
  return NextResponse.json({ products }, { status: 200 });
}

export async function POST(request) {
  const { title, description, price } = await request.json();
  await connectMongoDB();
  await Products.create({ title, description, price });
  return NextResponse.json(
    { message: "Product created successfully" },
    { status: 200 }
  );
}
