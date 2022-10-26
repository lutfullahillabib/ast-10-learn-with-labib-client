
const allCourses =
    async () => {
        return fetch('https://learn-with-labib-server.vercel.app/courses')
    };

const allCategories =
    async () => {
        return fetch('https://learn-with-labib-server.vercel.app/categories')
    };

const singleCategory =
    async ({ params }) => {
        return fetch(`https://learn-with-labib-server.vercel.app/categories/${params.name}`)
    };

export { allCourses, allCategories, singleCategory };
