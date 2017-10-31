package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}
