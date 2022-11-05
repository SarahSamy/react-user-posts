import AccordionCard from '../components/UI/AccordionCard';

const Post = (props) => {
    const togglePost = () => {
        props.onTogglePost(props.id);
    }
    return (
        <AccordionCard onTogglePost={togglePost} title={props.title} content={props.content} isOpen={props.isOpen} />
    )
}
export default Post;