import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectDB();


const  BlogSchema = new mongoose.Schema(
  {
    title:String,
    slug:String,
    content: String


  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("Blog",BlogSchema);
