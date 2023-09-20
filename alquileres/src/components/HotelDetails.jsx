import { useQuery } from "@tanstack/react-query";
import {useRoute} from "wouter";
import { Typography, Card, CardActions, CardContent, CardMedia } from "@mui/material";


const fetchHotele = async (id) => {
    const res = await fetch(`http://localhost:5173/hotels/${id}`);
    if(!res.ok){
        throw new Error("Network response was not ok");
    }
    return res.json();
}

function HotelDetails(){
    const [match, params] = useRoute("/hotel/:id");
    const{
        data: hotel,
        isLoading,
        error,
    } = useQuery({
        queryKey:["hotel", params.id],
        queryFn: () => fetchHotele(params.id)
    });

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error fetchin Hotel! {error.message}</div>
    }
    return(
        <Card sx={{ maxWidth: 345, backgroundColor: "#e8e8e8"}}>
            <CardMedia sx={{height: 140}} image={hotel.im} title={hotel.name}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {hotel.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {hotel.description}
                </Typography>
            </CardContent>
            <CardActions>
                {}
            </CardActions>
        </Card>
    )
}
export default HotelDetails;
