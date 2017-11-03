package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleRepository extends JpaRepository<Vehicle, Long>{
    List<Vehicle> findAllByRentedIs(boolean rented);
}
