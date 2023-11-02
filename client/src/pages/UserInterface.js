import { Container, ListGroup } from "react-bootstrap";
import Article from "../components/Article";
import AddArticle from "../components/AddArticle";

export default function userInterface() {
    return (
        <>
        <Container className="dflex mt-3 mb-5">
            <div>
                <p>Merci d'avoir mis en vente les meubles suivants ! 🔥</p>
                <ListGroup horizontal style={{overflow:"scroll", backgroundColor:"#FEFAE0"}}>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                </ListGroup>
            </div>

            <div className="mt-5">
                <p>Un autre meuble à qui donner une seconde vie ? C'est ici ! ♻️</p>
            </div>
            <AddArticle />
        </Container>
        </>
    )
}
