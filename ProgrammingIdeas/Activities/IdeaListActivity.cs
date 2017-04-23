using Android.App;
using Android.Content;
using Android.OS;
using Android.Support.V7.Widget;
using Android.Views;
using Android.Widget;
using Newtonsoft.Json;
using ProgrammingIdeas.Adapters;
using ProgrammingIdeas.Helpers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace ProgrammingIdeas.Activities
{
    [Activity(Label = "ItemActivity", Theme = "@style/AppTheme")]
    public class IdeaListActivity : BaseActivity
    {
        private RecyclerView recyclerView;
        private RecyclerView.LayoutManager manager;
        private IdeaListAdapter adapter;
        private List<Category> allItems = new List<Category>();
        private List<CategoryItem> itemsList;
        private List<CategoryItem> bookmarkedList;
        private ProgressBar progressBar;
        private string itemTitle, path, ideasdb = Path.Combine(System.Environment.GetFolderPath(System.Environment.SpecialFolder.Personal), "ideasdb");
        private string progressingListPath = Path.Combine(System.Environment.GetFolderPath(System.Environment.SpecialFolder.Personal), "progressdb");

        public override int LayoutResource
        {
            get
            {
                return Resource.Layout.idealistactivity;
            }
        }

        public override bool HomeAsUpEnabled
        {
            get
            {
                return true;
            }
        }

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            Global.IsWrittenDB = true;
            path = Path.Combine(Global.APP_PATH, "bookmarks.json");
            manager = new LinearLayoutManager(this);
            recyclerView = FindViewById<RecyclerView>(Resource.Id.itemRecyclerView);
            progressBar = FindViewById<ProgressBar>(Resource.Id.completedIdeasBar);
            allItems = Global.Categories;
            progressBar.Max = allItems[Global.CategoryScrollPosition].Items.Count;
            ShowProgress();
            setupMainIntent();
        }

        private void ShowProgress()
        {
            var completedCount = allItems[Global.CategoryScrollPosition].Items.FindAll(x => x.State == "done").Count;
            progressBar.Progress = 0;
            progressBar.IncrementProgressBy(completedCount);
        }

        private void setupMainIntent()
        {
            string title = Global.Categories[Global.CategoryScrollPosition].CategoryLbl;
            itemTitle = title;
            itemsList = Global.Categories[Global.CategoryScrollPosition].Items;

            RunOnUiThread(() =>
            {
                Title = title;
                recyclerView.SetLayoutManager(manager);
                adapter = new IdeaListAdapter(itemsList, this);
                adapter.ItemClick += OnItemClick;
                recyclerView.SetAdapter(adapter);
                manager.ScrollToPosition(Global.ItemScrollPosition);
                adapter.StateClicked += (e) =>
                {
                    var contents = e.Split(new char[] { '-' }, StringSplitOptions.RemoveEmptyEntries);
                    int position = Convert.ToInt32(contents[0]);
                    string state = contents[1];
                    if (itemsList != null && itemsList.Count != 0)
                    {
                        itemsList[position].State = state;
                        adapter.NotifyItemChanged(position);
                        ShowProgress();
                        allItems.FirstOrDefault(x => x.CategoryLbl == title).Items.FirstOrDefault(y => y.Description == itemsList[position].Description).State = state;
                    }
                };
            });
        }

        public override bool OnOptionsItemSelected(IMenuItem item)
        {
            switch (item.ItemId)
            {
                case Android.Resource.Id.Home:
                    NavigateAway();
                    return true;
            }
            return base.OnOptionsItemSelected(item);
        }

        protected override void OnPause()
        {
            DBAssist.SerializeDB(ideasdb, allItems);
            base.OnPause();
        }

        private void OnItemClick(int position)
        {
            Global.ItemScrollPosition = position;
            var intent = new Intent(this, typeof(IdeaDetailsActivity));
            intent.PutExtra("sender", "idealistactivity"); //one recycler view for bookmark activity and idea list activity so i need to know the sender
            StartActivity(intent);
            OverridePendingTransition(Resource.Animation.push_left_in, Resource.Animation.push_left_out);
        }

        public override void OnBackPressed()
        {
            NavigateAway();
            base.OnBackPressed();
        }

        private void NavigateAway()
        {
            Global.ItemScrollPosition = 0;
            NavigateUpTo(new Intent(this, typeof(CategoryActivity)));
            OverridePendingTransition(Resource.Animation.push_right_in, Resource.Animation.push_right_out);
        }
    }
}