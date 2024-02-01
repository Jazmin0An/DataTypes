var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews().AddRazorRuntimeCompilation();
var app = builder.Build();


app.MapGet("/", () => "Hello World!");

app.UseStaticFiles();
app.MapControllerRoute("default", "{controller=Home}/{action=Index}/{id?}");
app.Run();