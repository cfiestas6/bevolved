int	x_recursive_power(int nb, int power)
{
	if (power < 1)
	{
		return (!power);
	}
	return (nb * x_recursive_power(nb, power - 1));
}