export class ApiClient {
  constructor(private baseUrl: string) {}

  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(this.baseUrl + endpoint);
      if (!response.ok) {
        throw new Error(`HTTP Error, status: ${response.status}`);
      }
      return response.json() as T;
    } catch (error) {
      throw new Error(`API request failed: ${error}`);
    }
  }
}
