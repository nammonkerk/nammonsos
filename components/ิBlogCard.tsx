import BlogCard
export  default async function BlogsCard() {
    title: "บทความ",
  description: "รวมบทความและข่าวสารล่าสุด",
};

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  await connectDB();

  const blogs = await Blog.find()
    .sort({ createdAt: -1 })
    .lean();

  const serializedBlogs = blogs.map((blog) => ({
    _id: blog._id.toString(),
    title: String(blog.title ?? ""),
    slug: String(blog.slug ?? ""),
    content: String(blog.content ?? ""),
    createdAt: blog.createdAt
      ? new Date(blog.createdAt).toLocaleDateString("th-TH", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "",
  }));
