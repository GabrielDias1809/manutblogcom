const API_KEY = "f7abb6445f0849c093eb5640687540a9"; // Substitua pela sua chave real
const BASE_URL = "https://newsapi.org/v2";

export async function fetchNews(limit = 5, country = "br") {
  try {
    const response = await fetch(
      `${BASE_URL}/everything?q=guerra OR conflito OR militar OR rádio OR exército OR defesa OR geopolítica OR OTAN&language=pt&pageSize=${limit}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    
    if (data.status !== "ok") throw new Error("Erro ao buscar notícias");

    return data.articles; // Retorna os artigos filtrados
  } catch (error) {
    console.error("Erro ao obter notícias:", error);
    return [];
  }
}
