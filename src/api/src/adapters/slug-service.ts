import SlugGeneratorService from "../application/services/slug-generator"

export default class SlugService implements SlugGeneratorService {
  createSlug(text: string): string {
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .substring(0, 50)

    return slug
  }
}
