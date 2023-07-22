import axios from 'axios'

const tutor = 'https://yourknowledge.online/wp-json/tutor/v1'

export const getTutorCourses = async (callback) => {
  const auth = {
    username: 'key_3902cce99519cd59b58dd0a459261ee2',
    password: 'secret_dfb04f22f65237d5b6178b3bd7fa3899cbdaa44bbb037813f0202f43a27d58a4'
  }
  const response = await axios.get(`${tutor}/courses`, { auth })
  const courses = response.data.data.posts.map(course => {
    return {
      name: course.post_title,
      link: '/courses/' + course.post_name
    }
  })
  callback(courses)
}