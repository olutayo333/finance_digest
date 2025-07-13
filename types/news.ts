export interface NewsArticle {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

export interface CardsProps {
  loading: boolean;
  errorMessage: string;
  newsData: NewsArticle[] | undefined;
  formatDate: (unixSeconds: number) => string;
}