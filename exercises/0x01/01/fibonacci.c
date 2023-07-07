int	fibonacci(int index)
{
	if (index < 0)
		return (-1);
	if (index < 2)
		return (index);
	return (fibonacci(index - 2) + fibonacci(index - 1));
}