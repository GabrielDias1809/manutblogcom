const API_KEY = "f7abb6445f0849c093eb5640687540a9"; // Substitua pela sua chave real
const BASE_URL = "https://newsapi.org/v2";

export async function fetchNews(category = "general", limit = 5, country = "br") {
    try {
      const response = await fetch(
        `${BASE_URL}/top-headlines?category=general&language=pt&country=${country}&pageSize=${limit}&apiKey=${API_KEY}`,
        {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0", // Adiciona um User-Agent válido
          },
          mode: "cors", // Garante que a requisição seja tratada corretamente
        }
      );
  
      const data = await response.json();
      
      if (data.status !== "ok") throw new Error(`Erro na API: ${data.message}`);
  
      return data.articles.slice(0, limit);
    } catch (error) {
      console.error("Erro ao obter notícias:", error);
      return [];
    }
  }
  