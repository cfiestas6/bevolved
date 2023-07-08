int	x_strncmp(char *s1, char *s2, unsigned int n)
{
	unsigned int	i;

	i = 0;
	if (n == 0)
		return (0);
	while (s1[i] && s2[i] && s1[i] == s2[i] && n > i + 1)
	{
		i++;
	}
	return (s1[i] - s2[i]);
}