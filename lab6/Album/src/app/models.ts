export interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  export interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
  }
export interface Album{
  id:number;
  title:string;
}
export interface Photo{
  albumId: number;
  id:number;
  title: string;
  url:string;
  thumbnailUrl:string;
}