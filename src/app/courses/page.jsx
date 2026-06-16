import { getAllCourses } from "@/data/coursesData";
import Link from "next/link";

export default function CoursesPage() {

  const courses = getAllCourses();

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Our Courses
      </h1>


      <div className="grid md:grid-cols-3 gap-6">

        {
          courses.map((course)=>(
            
            <div 
            key={course.slug}
            className="
            bg-white 
            rounded-xl 
            shadow-md 
            p-6
            "
            >

              <h2 className="text-xl font-bold">
                {course.title}
              </h2>

              <p className="text-gray-600 mt-3">
                {course.description}
              </p>


              <Link
              href={`/courses/${course.slug}`}
              className="
              inline-block
              mt-5
              bg-blue-600
              text-white
              px-5
              py-2
              rounded-lg
              "
              >
                View Course
              </Link>


            </div>

          ))
        }

      </div>

    </div>
  )
}