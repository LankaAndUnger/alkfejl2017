package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> {
    Rating findByValue(int value);
}
