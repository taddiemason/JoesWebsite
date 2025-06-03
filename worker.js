export default {
  async fetch(request, env, ctx) {
    try {
      const githubUrl = "https://raw.githubusercontent.com/taddiemason/JoesWebsite/main/takedown.html";

      const response = await fetch(githubUrl);

      if (!response.ok) {
        return new Response("Failed to fetch HTML content.", { status: 500 });
      }

      const html = await response.text();

      return new Response(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=300"
        }
      });
    } catch (error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  }
}
