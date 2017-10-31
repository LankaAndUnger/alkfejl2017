package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRepository extends JpaRepository<Rental, Long> {
}
