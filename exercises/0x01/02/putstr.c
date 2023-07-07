#include <string.h>
#include <stdio.h>
#include <unistd.h>

#include <unistd.h>

void	putchar(char c)
{
	write(1, &c, 1);
}

void	putstr(char *str)
{
	int i;

	i = 0;
	while (*(str + i) != '\0')
	{
		putchar(*(str + i));
		i++;
	}
}
