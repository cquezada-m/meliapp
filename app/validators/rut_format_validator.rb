class RutFormatValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    return if value.blank? # Don't validate if the value is blank

    rut = normalize_rut(value) # Remove non-numeric characters and convert to integer
    base, verifier = split_rut(rut) # Split RUT into base and verifier parts
    expected_verifier = calculate_verifier(base) # Calculate expected verifier using RUT algorithm

    # Check if the actual verifier matches the expected verifier
    if verifier != expected_verifier
      record.errors.add(attribute, 'formato de RUT inválido')
    end
  end

  private

  # Helper method to remove non-numeric characters from the input and convert to integer
  def normalize_rut(value)
    value.gsub(/[^0-9kK]/, '').to_i
  end

  # Helper method to split RUT into base and verifier parts
  def split_rut(rut)
    base = rut / 10
    verifier = rut % 10
    [base, verifier]
  end

  # Helper method to calculate expected verifier using RUT algorithm
  def calculate_verifier(base)
    sum = 0
    factor = 2

    # Iterate over digits of base, multiplying each by a factor and summing the results
    while base.positive?
      sum += factor * (base % 10)
      factor = factor == 7 ? 2 : factor + 1 # Alternate factor between 2 and 7
      base /= 10
    end

    # Calculate expected verifier based on sum
    expected_verifier = 11 - (sum % 11)
    expected_verifier = 0 if expected_verifier == 11
    expected_verifier = 'K' if expected_verifier == 10
    expected_verifier
  end
end
