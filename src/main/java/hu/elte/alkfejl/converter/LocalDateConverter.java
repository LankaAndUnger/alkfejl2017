package hu.elte.alkfejl.converter;

import java.sql.Date;
import java.time.LocalDate;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

/**
 * Converter for java.time persistence.
 *
 * @author m.elbehi
 */
@Converter(autoApply = true)
public class LocalDateConverter implements AttributeConverter<LocalDate, Date> {

    @Override
    public Date convertToDatabaseColumn(LocalDate date) {


        return date != null ? Date.valueOf(date) : null;
    }

    @Override
    public LocalDate convertToEntityAttribute(Date value) {

        return value != null ? value.toLocalDate() : null;
    }
}
