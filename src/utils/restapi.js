import axios from 'axios'

const tutor = 'https://yourknowledge.online/wp-json/tutor/v1'

export const getTutorCourses = async (callback) => {
  const response = await axios.get(`${tutor}/courses`)
  const courses = response.data.data.posts.map(course => {
    return {
      name: course.post_title,
      link: '/courses/' + course.post_name
    }
  })
  callback(courses)
}