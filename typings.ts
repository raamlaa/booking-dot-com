export type Listings = {
    url: string;
    title:string;
    rating: string | null;
    description: string;
    price: string ; 
    booking_metadata: string;
    rating_word: string;
    rating_count: string | null;
    }

export type Result = {
    content: {
        listings: Listings[];
        total_listings: string;
    }
}