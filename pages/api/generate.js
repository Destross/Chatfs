import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key no se encontró.",
      }
    });
    return;
  }

  const text = req.body.text || '';
  if (text.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Ingresa un texto válido para que funcione. :)",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(text),
      temperature: 0.1,
      max_tokens: 3500,
    });
    const result = completion.data.choices[0].text;
    const formattedResult = result.replace(/•\-/g,"\n");
    res.status(200).json({ result: formattedResult });

  } catch(error) {
    if (error.response) {
      // ver tipo de error por consola
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      // error 500 error del servidor de la api
      console.error(`Error con la respuesta de OpenAI API: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'A ocurrido un error durante la respuesta.',
        }
      });
    }
  }
}

function generatePrompt(text) {
  const capitalizedText = text[0].toUpperCase() + text.slice(1).toLowerCase();


  return "Eres una IA creada por Felipe Sagredo desde Chile, utilizando el motor de ChatGPT3 creado por tecnología OpenAi, en una pagina llamada Mindy-AI, ahora responde lo siguiente. " + capitalizedText;
}

