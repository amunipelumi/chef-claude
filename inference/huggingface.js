import { HfInference } from '@huggingface/inference'

// console.log(process.env.HF_ACCESS_TOKEN)
const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

export const aiRecipe = async (arr) => {
    const ingredientsString = arr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        const result = response.choices[0].message.content
        // console.log(result)
        return result
    } catch (err) {
        console.error(err.message)
    }
}


// const client = new HfInference("hf_xxxxxxxxxxxxxxxxxxxxxxxx");

// const chatCompletion = await client.chatCompletion({
// 	model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
// 	messages: [
// 		{
// 			role: "user",
// 			content: "What is the capital of France?"
// 		}
// 	],
// 	provider: "hf-inference",
// 	max_tokens: 500
// });

// console.log(chatCompletion.choices[0].message);