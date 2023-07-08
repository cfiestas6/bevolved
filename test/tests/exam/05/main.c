#include <stdio.h>

int x_recursive_power(int nb, int power);

int	main(void)
{
	printf("0:%d\n", x_recursive_power(1, -10));
	printf("0:%d\n", x_recursive_power(1, -1));
	printf("1:%d\n", x_recursive_power(10, 0));
	printf("10:%d\n", x_recursive_power(10, 1));
	printf("100:%d\n", x_recursive_power(10, 2));
	printf("216:%d\n", x_recursive_power(6, 3));
}