class RutValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    # Remove all non-numeric characters
    cleaned_rut = value.gsub(/[^0-9kK]/, '')
    
    # Check that the cleaned RUT is 9 or 10 characters long
    unless cleaned_rut.length == 9 || cleaned_rut.length == 10
      record.errors.add(attribute, :invalid_rut)
      return
    end
    
    # Split the cleaned RUT into its components (number and verifier digit)
    rut_number = cleaned_rut[0..-2]
    verifier_digit = cleaned_rut[-1]
    
    # Calculate the verifier digit using the mod-11 algorithm
    expected_verifier_digit = calculate_verifier_digit(rut_number)
    
    # Compare the expected and actual verifier digits
    unless expected_verifier_digit == verifier_digit
      record.errors.add(attribute, :invalid_rut)
    end
  end
  
  private
  
  def calculate_verifier_digit(rut_number)
    sum = 0
    multiplier = 2
    
    # Calculate the sum of products of each digit and the corresponding multiplier
    rut_number.reverse.each_char do |digit|
      sum += digit.to_i * multiplier
      multiplier = (multiplier == 7) ? 2 : (multiplier + 1)
    end
    
    # Calculate the verifier digit as the remainder of 11 minus the remainder of dividing the sum by 11
    verifier_digit = 11 - (sum % 11)
    
    # Map the verifier digit to a string (0-9 or 'K')
    if verifier_digit == 10
      'K'
    elsif verifier_digit == 11
      '0'
    else
      verifier_digit.to_s
    end
  end
end
