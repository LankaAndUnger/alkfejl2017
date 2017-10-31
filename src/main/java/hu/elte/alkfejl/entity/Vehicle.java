package hu.elte.alkfejl.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

/**
 * Created by vimtaai on 2017. 09. 25..
 */
@Entity
@Table(name = "vehicle")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String plate;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private int vintage;

    @Column(nullable = false)
    private int price;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "vehicle")
    private Set<Rental> rentals;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name="vehicle_rating",
            joinColumns=@JoinColumn(name="vehicle_id", referencedColumnName="id"),
            inverseJoinColumns=@JoinColumn(name="rating_id", referencedColumnName="id"))
    private Set<Rating> ratings;

    public Vehicle(String plate, String brand, String type, int vintage, int price) {
        this.plate = plate;
        this.brand = brand;
        this.type = type;
        this.vintage = vintage;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getVintage() {
        return vintage;
    }

    public void setVintage(int vintage) {
        this.vintage = vintage;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Set<Rental> getRentals() {
        return rentals;
    }

    public void setRentals(Set<Rental> rentals) {
        this.rentals = rentals;
    }

    public Set<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(Set<Rating> ratings) {
        this.ratings = ratings;
    }
}
