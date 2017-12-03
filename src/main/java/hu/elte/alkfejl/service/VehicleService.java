package hu.elte.alkfejl.service;

import hu.elte.alkfejl.entity.Rating;
import hu.elte.alkfejl.entity.Vehicle;
import hu.elte.alkfejl.repository.RatingRepository;
import hu.elte.alkfejl.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private RatingRepository ratingRepository;

    public String createNewVehicle(Vehicle vehicle) {
        String result = validateVehicleData(vehicle);
        if (result.equals("")) {
            vehicleRepository.save(vehicle);
            return result;
        }
        return result;
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public List<Vehicle> getAllUnrentedVehicles() {
        return vehicleRepository.findAllByRentedIs(false);
    }

    public boolean ratingVehicle(Long vehicleId, Long ratingId) {
        Vehicle vehicle = vehicleRepository.findOne(vehicleId);
        Rating rating = ratingRepository.findOne(ratingId);
        vehicle.getRatings().add(rating);
        if (vehicleRepository.save(vehicle) == null) {
            return false;
        }
        return true;
    }

    private String validateVehicleData(Vehicle vehicle) {
        if (vehicle.getPlate().equals("") || vehicle.getBrand().equals("") || vehicle.getType().equals("")) {
            return "Minden mezőt kötelező kitölteni!";
        }
        if (vehicle.getVintage() <= 0) {
            return "Hibás évjárat!";
        }
        if (vehicle.getPrice() <= 0) {
            return "Hibés bérleti díj!";
        }

        return "";
    }

}
