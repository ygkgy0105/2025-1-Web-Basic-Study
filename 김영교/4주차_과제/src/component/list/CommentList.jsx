import styled from "styled-components";
import CommentListitem from "./CommentListitem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

function CommentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      {comments.map((comment, index) => {
        return <CommentListitem key={comment.id} comment={comment} />;
      })}
    </Wrapper>
  );
}

export default CommentList;
