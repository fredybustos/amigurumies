import type { APIRoute } from "astro";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY
});

const chatCompletion = async (prompt: string) => await openai.chat.completions.create({
  messages: [{
    role: "user",
    content: `Give me the patterns to create:\n\n"${prompt}"\n\n into crochet Japanes amigurumi tecnique, if it does not exist, create an exmaple, give me the patterns in Spanish.`
  }],
  model: "gpt-3.5-turbo",
  n: 1,
  stop: null,
  temperature: 0.5,
  max_tokens: 2048,
  presence_penalty: 0.5,
  frequency_penalty: 0.5,
});

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const prompt = data.get("prompt");
  
  if (!prompt) {
    return new Response(
      JSON.stringify({
        message: "prompt is required",
      }),
      { status: 400 }
    );
  }

  return chatCompletion(prompt as string).then((response) => {
    return new Response(
      JSON.stringify({
        status: "Success!",
        data: {
          message: response.choices[0].message.content
        }
      }),
      { status: 200 }
    );
  })
    .catch(error => {
      throw new Error(error)
    })
};