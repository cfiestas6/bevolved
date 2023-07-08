char	*x_strncat(char *dest, char *src, unsigned int nb)
{
	int	n;
	int	a;

	n = 0;
	a = 0;
	while (dest[n])
		n++;
	while (src[a] && nb-- != 0)
		dest[n++] = src[a++];
	dest[n] = '\0';
	return (dest);
}