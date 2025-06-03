export default {
  async fetch(request, env, ctx) {
    try {
      // GitHub raw URL to takedown.html
      const githubUrl = "https://raw.githubusercontent.com/taddiemason/JoesWebsite/main/takedown.html";

      // Fetch HTML content from GitHub
      const response = await fetch(githubUrl);

      // Check if the request was successful
      if (!response.ok) {
        return new Response("Failed to fetch HTML content.", { status: 500 });
      }

      // Get the text content of the HTML file
      const html = await response.text();

      // Return the HTML response with proper headers
      return new Response(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=300" // cache for 5 minutes
        }
      });
    } catch (error) {
      // Return error message if something went wrong
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  }
}
