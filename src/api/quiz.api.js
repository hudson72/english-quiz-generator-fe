export class QuizApi {
 static async getAll() {
  const res = await fetch('http://localhost:3000/quizzes', {
   method: 'GET'
  })
  const data = await res.json();
  return data;
 }
}