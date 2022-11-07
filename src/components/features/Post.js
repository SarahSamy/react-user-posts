import AccordionCard from '../../components/UI/AccordionCard';

const Post = ({ id, title, content, isOpen, onTogglePost }) => {
    const togglePost = () => {
        onTogglePost(id);
    }
    return (
        <AccordionCard onTogglePost={togglePost} title={title} content={content} isOpen={isOpen} />
    )
}
export default Post;