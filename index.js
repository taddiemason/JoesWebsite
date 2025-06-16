export default {
  async fetch(request, env, ctx) {
    try {
      const githubUrl = "https://raw.githubusercontent.com/taddiemason/JoesWebsite/main/index.html";

      const githubResponse = await fetch(githubUrl);

      if (!githubResponse.ok) {
        return new Response("Failed to fetch HTML content from GitHub.", { status: 502 });
      }

      const html = await githubResponse.text();

      return new Response(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=300"
        }
      });
    } catch (error) {
      return new Response(`Unexpected error: ${error.message}`, { status: 500 });
    }
  }
}
