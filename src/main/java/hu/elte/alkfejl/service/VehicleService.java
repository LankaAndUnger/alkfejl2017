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

    public boolean createNewVehicle(String plate, String brand, String type, String vintage, String price) {
        try {
            int realVintage = Integer.parseInt(vintage);
            int realPrice = Integer.parseInt(price);
            Vehicle vehicle = new Vehicle(plate, brand, type, realVintage, realPrice);
            if (vehicleRepository.save(vehicle) == null) {
                return false;
            }
        }
        catch (NumberFormatException e) {
            System.out.println(e);
        }
        return true;
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public boolean ratingVehicle(Long vehicleId, String rating) {
        try {
            Vehicle vehicle = vehicleRepository.findOne(vehicleId);
            int ratingValue = Integer.parseInt(rating);
            Rating realRating = ratingRepository.findByValue(ratingValue);
            vehicle.getRatings().add(realRating);
            if (vehicleRepository.save(vehicle) == null) {
                return false;
            }
        }
        catch (NumberFormatException e) {
            System.out.println(e);
        }
        return true;
    }

}
