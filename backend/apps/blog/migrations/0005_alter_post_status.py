# Generated by Django 3.2.16 on 2023-06-19 20:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_post_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='status',
            field=models.CharField(choices=[('draft', 'Draft'), ('published', 'Published'), ('delete', 'Delete')], default='draft', max_length=10),
        ),
    ]
