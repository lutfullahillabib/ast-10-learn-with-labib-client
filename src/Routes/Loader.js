
const allCourses =
    async () => {
        return fetch('https://learn-with-labib-server.vercel.app/courses')
    };

const allCategories =
    async () => {
        return fetch('https://learn-with-labib-server.vercel.app/categories')
    };

const singleCourse =
    async ({ params }) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
    };

export { allCourses, allCategories, singleCourse };
