export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  highlighted?: boolean;
}

export const allPosts: BlogPost[] = [
  {
    title: "Why I Use a GenAI Image as My Profile Picture",
    date: "2025-01-29",
    slug: "why-i-use-genai-profile-picture"
  },
  {
    title: "/uses",
    date: "2025-06-09",
    slug: "uses",
    highlighted: true
  }
]; 