import { getCourseBySlug, getAllCourses } from '@/data/coursesData';
import CoursePage from '@/components/CoursePage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CoursePage course={course} />;
}