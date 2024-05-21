import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./DirectorView.module.css";

function DirectorView({ movies }) {
  const { directorName } = useParams();
  const movie = movies.find((m) => m.director.name === directorName);

  if (!movies.length) {
    return <Col md={9}>Loading...</Col>;
  }

  if (!movie) {
    return <Col md={9}>Director not found</Col>;
  }

  const imageStyle = {
    backgroundImage: `url(${movie.director.DirectorImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
  };

  console.log(movie.director.DirectorImage);

  return (
    <div>
      <div className={styles.directorViewContainer}>
        <div className={styles.directorView}>
          <Col md={12}>
            <div>
              <div>
                <div className={styles.image} style={imageStyle}></div>
              </div>
              <div className={styles.contentContainer}>
                <div className={styles.directorTextContainer}>
                  <div className={styles.directorViewText}>
                    <div>
                      <span className={styles.directorViewTitle}>
                        {movie.director.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.description}>
                <span className={styles.plot}>Bio: </span>
                <span>{movie.director.bio}</span>
              </div>
              <div className={styles.directorViewButton}>
                <Link to={"/"}>
                  <Button variant="primary">Back</Button>
                </Link>
              </div>
            </div>
          </Col>
        </div>
      </div>
      <div className={styles.lowerSection}></div>
    </div>

    // <div>
    //   <div className={styles.directorViewContainer}>
    //     <div className={styles.directorView}>
    //       <Col md={12}>
    //         <div>
    //           <div>
    //             <div className={styles.image} style={imageStyle}></div>
    //           </div>
    //           <div>
    //             <div className={styles.directorViewText}>
    //               <div>
    //                 <span className={styles.directorViewTitle}>
    //                   {movie.director.name}
    //                 </span>
    //               </div>
    //             </div>
    //           </div>

    //           <div>
    //             <span>Bio: </span>
    //             <span>{movie.director.bio}</span>
    //           </div>

    //           <div className={styles.directorViewButton}>
    //             <Link to={"/"}>
    //               <Button variant="primary">Back</Button>
    //             </Link>
    //           </div>
    //         </div>
    //       </Col>
    //     </div>
    //   </div>
    // </div>
  );
}

export default DirectorView;
