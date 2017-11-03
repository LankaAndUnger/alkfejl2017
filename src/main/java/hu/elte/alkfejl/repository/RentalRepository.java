package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Rental;
import hu.elte.alkfejl.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RentalRepository extends JpaRepository<Rental, Long> {
    List<Rental> findAllByUser(User user);
}
