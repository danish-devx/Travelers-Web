import Button from 'react-bootstrap/Button';

function BlogButton() {
  return (
    <>
    <div className="d-flex justify-content-center my-4">
      <Button 
        variant="outline-danger" 
        size="lg" 
        className="px-4 py-3 fw-bold rounded-0 custom-hover-btn"
        style={{
          borderColor: '#eb3d4f',
          color: '#eb3d4f',
          backgroundColor:'transparent'
        }}
      >
        View All Blog Posts
      </Button>
    </div>
    </>
  );
}

export default BlogButton