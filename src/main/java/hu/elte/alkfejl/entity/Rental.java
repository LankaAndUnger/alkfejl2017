package hu.elte.alkfejl.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "rental")
public class Rental {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @Column(nullable = false)
    private LocalDate rentalStart;

    @Column(nullable = false)
    private LocalDate rentalEnd;

    @Column
    private LocalDate rentalClose;

    @Column
    private int amount;

    public Rental(User user, Vehicle vehicle, LocalDate rentalStart, LocalDate rentalEnd) {
        this.user = user;
        this.vehicle = vehicle;
        this.rentalStart = rentalStart;
        this.rentalEnd = rentalEnd;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public LocalDate getRentalStart() {
        return rentalStart;
    }

    public void setRentalStart(LocalDate rentalStart) {
        this.rentalStart = rentalStart;
    }

    public LocalDate getRentalEnd() {
        return rentalEnd;
    }

    public void setRentalEnd(LocalDate rentalEnd) {
        this.rentalEnd = rentalEnd;
    }

    public LocalDate getRentalClose() {
        return rentalClose;
    }

    public void setRentalClose(LocalDate rentalClose) {
        this.rentalClose = rentalClose;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
